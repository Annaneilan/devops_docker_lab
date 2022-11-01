Build an Image of the Application

    docker build -t annaneilan/devops-node-app .

Push to Docker Hub

    docker push annaneilan/devops-node-app

Run with special restrict on CPU and memory

    docker run -p 8080:8080 --cpus=".5" --memory="150m" annaneilan/devops-node-app
