#  API Documentation

webapi--iv.herokuapp.com

## Table of Contents
 
- [Auth Routes](#auth-routes)
  * [Register](#register)    
  * [Login](#login)    
- [User Routes](#user-routes)
  * [Get Users](#get-users)    
  * [Get User](#get-user)
  * [Get Projects by User ID](#get-projects-by-user-id)
  * [Delete User](#delete-user)
  * [Update User](#update-user)
- [Project Routes](#project-routes)
  * [Create Project](#create-project)    
  * [Get Projects](#get-projects)    
  * [Get Projects](#get-projects-1)    
  * [Update Project](#update-project)    
  * [Delete Project](#delete-project)
    



# Auth Routes
| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  | /auth/login    | Logs in already registered user. |

## Register 📑

### Registers a new user.

_Method URL:_ `webapi--iv.herokuapp.com/auth/register`

_HTTP Method:_ **[POST]**

## Login 📃

### Logs in an already registered user.

_Method URL:_ `webapi--iv.herokuapp.com/auth/login`

_HTTP Method:_ **[POST]**


# User Routes

## Get Users 🔍

### Gets a list of users.

_Method URL:_ `webapi--iv.herokuapp.com/users/`

_HTTP Method:_ **[GET]**

## Get User

### Gets user by ID. 🔍

_Method URL:_ webapi--iv.herokuapp.com/users/:id`

_HTTP Method:_ **[GET]**

## Get Projects by User ID 🔍

### Gets all projects for specified user.

_Method URL:_ `webapi--iv.herokuapp.com/users/:id/projects`

_HTTP Method:_ **[GET]**


## Delete User 🔥

### Deletes user by ID.

_Method URL:_ `webapi--iv.herokuapp.com/users/:id`

_HTTP Method:_ **[DELETE]**


## Update User  💳

### Updates user by ID.

_Method URL:_ `webapi--iv.herokuapp.com/users/:id`

_HTTP Method:_ **[PUT]**


# Project Routes

## Create Project 📤

### Creates a project, with a project type, description, funding amount, and user id.

_Method URL:_ `webapi--iv.herokuapp.com/journals`

_HTTP Method:_ **[POST]**


## Get Projects 📥

### Gets a list of projects.

_Method URL:_ `webapi--iv.herokuapp.com/journals`

_HTTP Method:_ **[GET]**

## Get Projects 📥

### Gets project by ID.

_Method URL:_ `webapi--iv.herokuapp.com/journals/:id`

_HTTP Method:_ **[GET]**


## Update Project ✒️

### Updates project by ID.

_Method URL:_ `webapi--iv.herokuapp.com/journals/:id`

_HTTP Method:_ **[PUT]**


## Delete Project  🔪

### Deletes project by ID.

_Method URL:_ `webapi--iv.herokuapp.com/journals/:id`

_HTTP Method:_ **[DELETE]**


## Get Reflections

_Method URL:_ `webapi--iv.herokuapp.com/reflections`

## Get Team by ID

_Method URL:_ `webapi--iv.herokuapp.com/reflections/:id`

## Create Team

_Method URL:_ `webapi--iv.herokuapp.com/reflections`


 
