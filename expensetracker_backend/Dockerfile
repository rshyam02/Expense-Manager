# Stage 1: Build the jar
FROM eclipse-temurin:17-jdk AS build
WORKDIR /app

# Copy pom.xml and download dependencies (for caching)
COPY pom.xml .
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src ./src

# Build the jar (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the jar
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
