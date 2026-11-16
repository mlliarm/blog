---
title: "How to instrument a FastAPI python application with Elastic APM"
date: 2025-07-11 08:40:38 +0000
gist: https://gist.github.com/mlliarm/f709e90308c4c4325e8c886621523038
---

## 1. Create an Elasticsearch deployment

Either in [ECH](https://www.elastic.co/docs/deploy-manage/deploy/elastic-cloud/create-an-elastic-cloud-hosted-deployment) or in other platforms ([ECK](https://www.elastic.co/guide/en/cloud-on-k8s/1.0/k8s-apm-server.html), ECE, etc).

It should have an APM server.

## 2. Go to the APM page

Capture the following information from the Elastic APM page from Kibana:

```
SERVICE_NAME=<YOUR_SERVICE_NAME>
SERVER_URL=<APM_SERVER_ENDPOINT>
SECRET_TOKEN=<APM_TOKEN>
```

## 3. Install apm python library

In your virtualenv run:

```
pip install elastic-apm
```

## 4. Go to your python app

Inside your `app.py` file add:

```python
from elasticapm.contrib.starlette import ElasticAPM
app = FastAPI() # this should already exist
app.add_middleware(ElasticAPM) # APM
```

## 5. Set environment variables

In a CLI write:

```
 export ELASTIC_APM_SERVICE_NAME=<YOUR_SERVICE_NAME>
 export ELASTIC_APM_SERVER_URL=<APM_SERVER_ENDPOINT>
 export ELASTIC_APM_SECRET_TOKEN=<APM_TOKEN>
```

## 6. Run app

```bash
python3 app.py
```

And send some responses.

## 7. Check APM

Go to `Observability > Aoplications > Service Inventory` and see your service.
