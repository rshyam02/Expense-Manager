# Use OpenJDK base image
FROM openjdk:17-jdk-slim

# Add metadata
LABEL maintainer="you@example.com"

# Add jar file to container
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "/app.jar"]
