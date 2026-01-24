### BadescuAlexandru_ProiectTW25
Proiect Tehnologii Web 2025

### Gestionare profile candidati integrat cu LinkedIn (sau aplicare la un job)

## Descriere:
Aplicația permite gestionarea profilelor candidaților (creare, vizualizare, actualizare, ștergere) și integrarea (opțională) cu un serviciu extern de tip LinkedIn pentru import/sincronizare limitată de date publice (nume, poziție, companie, URL profil). Frontend-ul este o Single Page Application (SPA) construită cu un framework bazat pe componente (ex: React.js) iar backend-ul expune un API RESTful care persistă datele într-o bază relațională sau nerelațională, accesată printr-un API de persistență (ORM).

## Stack:  

 Backend: Node.js + Express.js — RESTful API

 ORM: Sequyelize 

 Bază de date: PostgreSQL (relațional)

 Autentificare: JWT (JSON Web Tokens) + OAuth2 

 Frontend: React.js (CRA / Vite) cu React Router

 Instrumente: Postman / HTTPie / REST Client

## Specificații:

- Implementare: modelare entity în ORM și migrații/seed pentru date inițiale.

- Răspunsuri JSON, validare input, gestionare erori cu coduri HTTP standard.

- Consumul API-ului cu fetch/axios, afișare liste, formulare create/update, paginare simplă.

- Autentificare prin JWT: POST /api/auth/login returnează token; token trimis în Authorization: Bearer token.

- Integrarea: LinkedIn (OAuth2) pentru autorizare și apel la API prin folosirea unui serviciu placeholder.

# Pasi pentru Rularea proiectului 

1. 