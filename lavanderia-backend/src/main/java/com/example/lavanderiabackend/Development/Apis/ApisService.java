package com.example.lavanderiabackend.Development.Apis;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.lang.reflect.ParameterizedType;
import java.sql.Date;
import java.time.LocalDate;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.json.JSONArray;

@Service
public class ApisService {

    public static Boolean isPrimitive(Class<?> type) {
        return type == Double.class || type == Float.class
                || type == Long.class || type == Integer.class || type == Short.class
                || type == Character.class || type == Byte.class || type == Boolean.class
                || type == String.class || type == Object.class || type == Class.class || type == LocalDate.class
                || type == Date.class || type == double.class || type == long.class;
    }

    public List<String> findGetEndpoints() {
        int RequestParamAnnotationCount = 0;
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
                        Class<?> tipos[] = metodos[i].getParameterTypes();
                        Parameter parametros[] = metodos[i].getParameters();
                        Annotation annotations[][] = metodos[i].getParameterAnnotations();
                        if (annotations.length > 0) {
                            for (int x = 0; x < annotations.length; x++) {
                                for (Annotation a : annotations[x]) {
                                    if (a instanceof RequestParam) {
                                        if (RequestParamAnnotationCount == 0) {
                                            path = path + "?";
                                        }
                                        if (RequestParamAnnotationCount > 0) {
                                            path = path + "&";
                                        }
                                        if (isPrimitive(tipos[x])) {
                                            path = path + parametros[x].getName() + "=" + tipos[x].getSimpleName();
                                        } else {
                                            path = path + "{";
                                            Field fields[] = tipos[x].getDeclaredFields();
                                            for (Field field : fields) {
                                                field.setAccessible(true);
                                                path = path + field.getName() + "=" + field.getType().getSimpleName()
                                                        + ",";
                                            }
                                        }

                                        RequestParamAnnotationCount++;
                                    }
                                }
                            }
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
                                        String[] corpo = new String[1];
                                        corpo[0] = "";
                                        findAllFields(tipos[x], null, corpo);
                                        fieldsAsJson = new JSONObject(corpo[0]);
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

    public static void findAllFields(Class<?> tipo, Class<?> tipoPai, String[] body) {
        if (isPrimitive(tipo) || (tipo == tipoPai) || tipo.getDeclaredFields().length == 0) {
            body[0] += '"' + tipo.getSimpleName() + '"';
        } else {
            body[0] += "{";
            Field fields[] = tipo.getDeclaredFields();
            int x = 0;
            for (Field field : fields) {
                field.setAccessible(true);
                if (field.getType() != tipoPai && field.getType() != tipo) {
                    body[0] += '"' + field.getName() + '"' + ":";
                    if (Iterable.class.isAssignableFrom(field.getType())) {
                        body[0] += "[";
                        Class<?> genericTypeCLass = (Class<?>) ((ParameterizedType) field.getGenericType())
                                .getActualTypeArguments()[0];
                        if (genericTypeCLass != tipoPai && genericTypeCLass != tipo) {
                            findAllFields(genericTypeCLass, tipo, body);
                        }
                        body[0] += "]";
                    } else {
                        findAllFields(field.getType(), tipo, body);
                    }

                    if (x != fields.length - 1) {
                        body[0] += ",";
                    }
                    x++;
                }
            }
            body[0] += "}";
        }
    }
}
