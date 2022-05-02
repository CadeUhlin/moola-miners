#!/bin/bash
set -x
namespaceStatus=$(kubectl get namespaces rowdyrams -o json | jq .status.phase -r)

if [ $namespaceStatus == "Active" ]
then
    echo "Namespace rowdyrams exists, need to clean up"
    kubectl delete namespaces rowdyrams
fi

echo "Creating namespace rowdyrams"
kubectl create namespace rowdyrams
 
echo "Creating pods"
kubectl create -f rowdyrams.yaml --namespace rowdyrams

echo "Creating services"
kubectl create -f rowdyrams-service.yaml --namespace rowdyrams


kubectl get pods -n rowdyrams

