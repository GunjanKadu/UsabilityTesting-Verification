# djangorestboiler
A boiler plate for Restful development based on django. Ready for Deployment @ Heroku 

**Implementation consists of:**
 - Custom User Model - with Email as Identifier.
 - Updated Views & Serializers for User Model- Login, Registration, Email Confirmation, Password Retrieval 
 - JWT Implementation

Initialize Environment Variables for Following:

 1. EMAIL_HOST
 2. EMAIL_HOST_USER 
 3. EMAIL_HOST_PASSWORD 
 4. DEFAULT_FROM_EMAIL

**Ensure to replace the secret key.**
Handle DISABLE_COLLECTSTATIC. On heroku set the env variable.

Demo:[https://djangorestboiler.herokuapp.com/](https://djangorestboiler.herokuapp.com/)