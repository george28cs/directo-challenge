# Direct Challenge

This project is an application developed with NestJS to process numbers and return information about them.

## Running with Docker

1. **Clone the repository:**
   ```bash
   git clone <REPOSITORY_URL>

2. **Navigate to the project directory**

    ```bash
    cd directo-challenge

3. **Build the Docker image:**
    ```bash
    docker build -t directo-challenge .

4. **Run the Docker container**
    ```bash
    docker run -p 3000:3000 directo-challenge

5. **The application will be available at http://localhost:3000.**

6. **Test endpoint**
Method: POST
URL: http://localhost:3000/challenge
PAYLOAD:
```JSON
{
    "number": 19
}
```
6. **Run tests**

```
docker run directo-challenge npm test
```



