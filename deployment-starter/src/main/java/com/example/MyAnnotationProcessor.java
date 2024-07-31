
package com.example;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.lang.reflect.Method;

@Configuration
public class MyAnnotationProcessor {

    @Bean
    public BeanPostProcessor processAnnotations() {

        return new BeanPostProcessor() {
            @Override
            public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {

                for (Method method : bean.getClass().getMethods() ) {
                    if(method.isAnnotationPresent(MyAnnotation.class)){
                        try{
                            MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
                            String bpmnFilePath = annotation.bpmnFilePath();
                            method.invoke(bean, bpmnFilePath);
                    }catch (Exception e){
                            throw new RuntimeException(e);
                        }
                    }
                }
                return bean;
            }
        };
    }
}
