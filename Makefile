build:
	docker build . -t myapp

deploy:
	kubectl create -f deployment.yaml
	@echo "Your app started on: "
	minikube service myappservice --url

destroy:
	kubectl delete deploy/myappdeployment svc/myappservice
