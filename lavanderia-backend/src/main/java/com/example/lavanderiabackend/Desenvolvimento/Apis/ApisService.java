package com.example.lavanderiabackend.Desenvolvimento.Apis;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.json.JSONObject;
import org.springframework.data.util.AnnotatedTypeScanner;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.json.JSONArray;

@Service
public class ApisService {

    public Boolean isPrimitive(Class<?> type) {
        return type == Double.class || type == Float.class
                || type == Long.class || type == Integer.class || type == Short.class
                || type == Character.class || type == Byte.class || type == Boolean.class
                || type == String.class;
    }

    public List<String> findGetEndpoints() {
        List<String> pathList = new ArrayList<String>();
        AnnotatedTypeScanner scanner = new AnnotatedTypeScanner(true,
                RequestMapping.class, Controller.class);
        Set<Class<?>> lista = scanner.findTypes("com.example.lavanderiabackend");
        for (Class<?> classe : lista) {
            String basePath = "";
            if (classe.isAnnotationPresent(RequestMapping.class)) {
                String values[] = classe.getAnnotation(RequestMapping.class).value();
                if (values.length > 0) {
                    basePath = values[0];
                }
            }
            Method metodos[] = classe.getMethods();
            if (metodos.length > 0) {
                for (int i = 0; i < metodos.length; i++) {
                    if (metodos[i].isAnnotationPresent(GetMapping.class)) {
                        String path = "";
                        String getPathList[] = metodos[i].getAnnotation(GetMapping.class).value();
                        if (getPathList.length > 0) {
                            path = getPathList[0];
                        }
                        pathList.add(basePath + path);
                    }
                }
            }
        }
        return pathList;
    }

    public JSONArray findPostEndpoints() {
        JSONArray postEndpoints = new JSONArray();
        List<String> pathList = new ArrayList<String>();
        AnnotatedTypeScanner scanner = new AnnotatedTypeScanner(true,
                RequestMapping.class, Controller.class);
        Set<Class<?>> lista = scanner.findTypes("com.example.lavanderiabackend");
        for (Class<?> classe : lista) {
            String basePath = "";
            if (classe.isAnnotationPresent(RequestMapping.class)) {
                String values[] = classe.getAnnotation(RequestMapping.class).value();
                for (String value : values) {
                    basePath = basePath + value;
                }
            }
            Method metodos[] = classe.getMethods();
            for (int i = 0; i < metodos.length; i++) {
                if (metodos[i].isAnnotationPresent(PostMapping.class)) {
                    JSONObject endpoint = new JSONObject();
                    String path = "";
                    String getPathList[] = metodos[i].getAnnotation(PostMapping.class).value();
                    if (getPathList.length > 0) {
                        path = getPathList[0];
                    }
                    pathList.add(basePath + path);
                    endpoint.put("path", basePath + path);
                    Class<?> tipos[] = metodos[i].getParameterTypes();
                    Parameter parametros[] = metodos[i].getParameters();
                    Annotation annotations[][] = metodos[i].getParameterAnnotations();
                    JSONObject fieldsAsJson = new JSONObject();
                    if (annotations.length > 0) {
                        for (int x = 0; x < annotations.length; x++) {
                            for (Annotation a : annotations[x]) {
                                if (a instanceof RequestBody) {
                                    if (isPrimitive(tipos[x])) {

                                        fieldsAsJson.put(parametros[x].getName(), tipos[x].getSimpleName());

                                    } else {
                                        Field fields[] = tipos[x].getFields();
                                        for (Field field : fields) {
                                            fieldsAsJson.put(field.getName(), field.getType().getSimpleName());
                                        }
                                    }
                                }
                            }
                        }
                    }
                    endpoint.put("fields", fieldsAsJson);
                    postEndpoints.put(endpoint);
                }
            }

        }
        return postEndpoints;
    }
}
