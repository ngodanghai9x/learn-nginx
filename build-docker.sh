cd apps/service1/
docker build --no-cache -t service1:latest .

cd apps/service2/
docker build --no-cache -t service2:latest .
# docker build -f ./apps/service2/Dockerfile --no-cache -t service2:latest2 ./apps/service2