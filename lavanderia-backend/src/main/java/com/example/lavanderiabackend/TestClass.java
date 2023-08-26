package com.example.lavanderiabackend;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.json.JSONObject;
import org.springframework.data.util.AnnotatedTypeScanner;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

public class TestClass {
    public static void GetData() {
        AnnotatedTypeScanner scanner = new AnnotatedTypeScanner(true,
                RequestMapping.class, Controller.class);
        Set<Class<?>> lista = scanner.findTypes("com.example.lavanderiabackend");
        for (Class<?> classe : lista) {
            String basePath = "";
            List<String> pathList = new ArrayList<String>();
            if (classe.isAnnotationPresent(RequestMapping.class)) {
                String values[] = classe.getAnnotation(RequestMapping.class).value();
                for (String value : values) {
                    basePath = basePath + value;
                }
            }
            Method metodos[] = classe.getMethods();
            for (int i = 0; i < metodos.length; i++) {
                if (metodos[i].isAnnotationPresent(GetMapping.class)) {
                    String path = "";
                    String getPathList[] = metodos[i].getAnnotation(GetMapping.class).value();
                    for (String value : getPathList) {
                        path = path + value;
                    }
                    pathList.add(basePath + path);
                } else if (metodos[i].isAnnotationPresent(PostMapping.class)) {
                    String path = "";
                    String getPathList[] = metodos[i].getAnnotation(PostMapping.class).value();
                    for (String value : getPathList) {
                        path = path + value;
                    }
                    pathList.add(basePath + path);
                    Class<?> tipos[] = metodos[i].getParameterTypes();
                    Annotation annotations[][] = metodos[i].getParameterAnnotations();
                    JSONObject fieldAsJson = new JSONObject();
                    for (int x = 0; x < annotations.length; x++) {
                        for (Annotation a : annotations[i]) {
                            if (a instanceof ModelAttribute) {
                                Field fields[] = tipos[i].getFields();
                                for (Field field : fields) {
                                    fieldAsJson.put(field.getName(), field.getType().getSimpleName());
                                }
                            }
                        }
                    }
                    System.out.println(fieldAsJson);
                }
            }
            System.out.println(classe.getName());
            for (String path : pathList) {
                System.out.println(path);
            }

        }
    }
}
