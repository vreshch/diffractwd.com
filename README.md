# Website for diffractwd product [diffractwd.com](http://diffractwd.com)

[![GitHub Build Status](https://github.com/vreshch/diffractwd.com/workflows/CI/badge.svg)](https://github.com/vreshch/diffractwd.com/actions?query=workflow%3ACI)
[![License: MIT](https://img.shields.io/badge/License-MIT-gren.svg)](https://opensource.org/licenses/MIT)

Website Diffractwd - support of corresponding project

## Technologies Used

* Rect & Typescript
* Next JS as Framework
* Shipped with Docker
* Terraform for Infrastructure

## Quick Start

* Start local development

```bash
npm run dev
```

* Build project

```bash
npm run build
```

* Start project

```bash
npm start
```

* Run linter

```bash
npm run lint
```

## Docker commands

* Build Docker file locally

```bash
docker build -t gcr.io/diffractwd-com-321322/diffractwd-com:latest .
```

* Start Docker file

```bash
docker run --network=host gcr.io/diffractwd-com-321322/diffractwd-com:latest
```

* Push docker to registry

```bash
docker login & docker push gcr.io/diffractwd-com-321322/diffractwd-com:latest
```

## Creating infrastructure

* Install gcloud according to [instructions](https://cloud.google.com/sdk/docs/install)
* Auth with gcloud sdk

```bash
gcloud auth application-default login
```

* Create Goolge Cloud project (use your own PROJECT_ID & PROJECT_NAME)

```bash
gcloud projects create "PROJECT_ID" --name="PROJECT_NAME"
```

* Modify environment variables

```bash
code terraform.tfvars
```

* Verify your domain
https://developers.google.com/search

* Initialize terraform

```bash
terraform init
```

* Plan Terraform changes

```bash
terraform plan
```

* Deploy Terraform changes

```bash
terraform apply
```

## Contacts

* Website: [vreshch.com](http://vreshch.com)
* Email: vreshch@gmail.com
