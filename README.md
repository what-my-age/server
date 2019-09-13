# **WHATS MY AGE?**

```
Client :
http://whats-my-age.ayusudi.com

BaseURL / Server :
http://35.225.180.95
```

## **List of User Routes** :

| HTTP    | Routes         | Headers | Body                     | Description                  |
| ---     | -----          | ---     | ---                      | ---                          |
| POST    | /user/register | none    | name,email, password     | Register new user            |
| POST    | /user/login    | none    | email,password           | Login user                   |

---

## **List of Image Routes**

| HTTP    | Routes         | Headers | Body            | Description                    |
| ---     | -----          | ---     | ---             | ---                            |
| POST    | /image         | token   | image           | Analyze image (authentication) |
| DELETE  | /image/:id     | token   | none            | Delete image (authentication)  |

---

## **API Third Party**
| Name               | Auth   | CORS | Description                                   |
| ---                | ---    | ---  | ---                                           |
| Google Storange    | none   | Yes  | For upload image                              |
| Monderate Content  | apiKey | Yes  | Detect Age and Gender                         |
| Azure API          | apiKey | Yes  | Create automatic caption                      |
| Google Vision      | apiKey | Yes  | Detect human or not & Create automatic tags   |

---

## **Response**

1. Routes   : /user/register
- Method   : POST
```
Response :
{
    "data": {
        "_id": "5d7b5d155aa8760e643fcdc4",
        "name": "Ayu",
        "email": "ayusudi@yahoo.com",
        "password": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "createdAt": "2019-09-13T09:10:45.158Z",
        "updatedAt": "2019-09-13T09:10:45.158Z"
    }
}
```

2. Routes   : /user/login
- Method   : POST
```
Response :
{
    "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```
3. Routes   : /image
- Method   : POST
```
Response :
{
    "data1": {
        "tags": [
            "Hair",
            "Facial hair",
            "Face",
            "Beard",
            "Chin",
            "Forehead",
            "Eyebrow",
            "Hairstyle",
            "Head",
            "Cheek"
        ],
        "_id": "5d7b618d5aa8760e643fcdc5",
        "image": "https://storage.googleapis.com/projectphase2/1568366983525pewpwe.jpg",
        "UserId": "5d7b5d155aa8760e643fcdc4",
        "captions": "PewDiePie wearing a black shirt",
        "gender": "male",
        "age": 26,
        "createdAt": "2019-09-13T09:29:49.629Z",
        "updatedAt": "2019-09-13T09:29:49.629Z"
    }
}
```


4. Routes   : /image/:id
- Method   : DELETE
```
Response : 
{
    "data": {
        "tags": [
            "Hair",
            "Facial hair",
            "Face",
            "Beard",
            "Chin",
            "Forehead",
            "Eyebrow",
            "Hairstyle",
            "Head",
            "Cheek"
        ],
        "_id": "5d7b618d5aa8760e643fcdc5",
        "image": "https://storage.googleapis.com/projectphase2/1568366983525pewpwe.jpg",
        "UserId": "5d7b5d155aa8760e643fcdc4",
        "captions": "PewDiePie wearing a black shirt",
        "gender": "male",
        "age": 26,
        "createdAt": "2019-09-13T09:29:49.629Z",
        "updatedAt": "2019-09-13T09:29:49.629Z"
    }
}
```