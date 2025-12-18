<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🎬 PelisFan

**PelisFan** es una API/backend en Node.js + NestJS para gestionar y servir datos de películas (por ejemplo: títulos, géneros, detalles, búsquedas, etc.).  
Este proyecto está pensado como **API REST escalable y modular** para integrar con un frontend o consumir desde otras apps.

---

## 🚀 Descripción

Esta aplicación permite:

- Consultar películas (títulos, descripciones, etc.)
- Buscar por nombre
- Filtrar por género/año/calificación
- Extenderse fácilmente con nuevas rutas o microservicios

Está construida con **NestJS**, un framework progresivo de Node.js basado en TypeScript para backend escalable.

---

## 🛠 Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| **NestJS** | Framework principal |
| **TypeScript** | Lenguaje principal |
| **Node.js** | Runtime |
| **Jest** | Testing |
| **ESLint / Prettier** | Formato y calidad de código |

---

## 📦 Instalación

Cloná el repositorio:

```bash
git clone https://github.com/SamiraMicaela/pelisfan.git
cd pelisfan

## 📦 Instalación

Instalá dependencias:

npm install

---

## ⚙️ Ejecución

### 🧪 Modo desarrollo

npm run start:dev

### ▶️ Modo producción

npm run start:prod

La API quedará escuchando por defecto en:
http://localhost:3000

---

## 🧪 Tests

Para ejecutar los tests unitarios y de integración:

npm run test

Cobertura de tests:

npm run test:cov

---

## 📌 Endpoints (ejemplos)

Ejemplos de rutas que podría tener tu API (ajustá según tu implementación real)

Método | Ruta | Descripción
GET | /movies | Listar todas las películas
GET | /movies/:id | Obtener detalles de una película
GET | /movies/search?q= | Buscar películas
POST | /movies | Agregar nueva película
PUT | /movies/:id | Actualizar película
DELETE | /movies/:id | Eliminar película

---

## 📁 Estructura del proyecto

pelisfan/
├─ src/
│  ├─ modules/        # Módulos de dominio (películas, géneros, etc.)
│  ├─ common/         # Pipes, filtros, guardias, DTOs globales
│  ├─ main.ts         # Punto de entrada
├─ test/              # Tests
├─ .eslintrc.js       # Reglas de ESLint
├─ tsconfig.json      # Configuración TypeScript
├─ package.json
└─ README.md

---

## 🤝 Cómo contribuir

1. Hacé un fork del repositorio
2. Creá una rama nueva con tu feature:
   git checkout -b feature/nombre
3. Hacé commits claros
4. Abrí un Pull Request

---

## 🧾 Licencia

Este proyecto está bajo la MIT License.
Podés adaptarlo y usarlo para tus propósitos sin restricciones.

---

## 📝 Contacto

Si tenés dudas o querés colaborar:
samira@example.com (opcional)

---

✨ ¡Gracias por visitar PelisFan!
