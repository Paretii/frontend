# 🖥️ Frontend · DAW

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-próximamente-61DAFB?style=for-the-badge&logo=react&logoColor=black)

Repositorio de ejercicios y prácticas de la asignatura de **desarrollo frontend** del ciclo de **Desarrollo de Aplicaciones Web (DAW)** en el **IES Sabadell**.

Aquí voy subiendo todo lo que hago a lo largo del curso, desde los primeros ejercicios de JavaScript hasta los proyectos con TypeScript, y más adelante con React.

---

## 👤 Autor

**Iván Hernández García**
Estudiante de DAW · IES Sabadell

---

## 🗺️ Ruta de aprendizaje

| Etapa | Tecnología | Estado |
|:---:|---|:---:|
| 1 | **JavaScript**: DOM, eventos, asincronía, consumo de APIs | ✅ Completado |
| 2 | **TypeScript**: tipado estático, interfaces, uniones, enums | 🚧 En curso |
| 3 | **React**: componentes, props, estado | ⏳ Próximamente |

---

## 📁 Estructura del repositorio

```
frontend/
├── JavaScript/
│   ├── Exercicis/
│   │   ├── Activitat1/      → Primeros ejercicios (EJ1–EJ5)
│   │   ├── TinyEditor/      → Editor de texto sencillo
│   │   ├── contacthub/      → Gestor de contactos
│   │   ├── pokedex/         → Pokédex consumiendo una API
│   │   └── pokedex-1/       → Segunda versión de la Pokédex
│   └── Pruebas/
│       └── Async/           → Pruebas de async / await y promesas
│
└── typescript/
    ├── exercicis/           → Ejercicios ex1 … ex22
    ├── test/                → Pruebas sueltas
    ├── package.json
    └── tsconfig.json
```

---

## 🟨 JavaScript

Proyectos hechos con JavaScript "puro" (sin frameworks), manipulando el DOM directamente y con [Pico CSS](https://picocss.com/) para los estilos.

| Proyecto | Qué practico |
|---|---|
| **Activitat1** | Fundamentos: variables, condicionales, bucles, funciones |
| **TinyEditor** | Manipulación del DOM y eventos |
| **ContactHub** | Formularios, arrays de objetos y renderizado dinámico |
| **Pokédex** | `fetch`, `async/await` y consumo de una API REST |

---

## 🟦 TypeScript

Ejercicios pequeños, cada uno con su `HTML` + `TS`, que van subiendo de nivel poco a poco.

| Ejercicios | Conceptos |
|---|---|
| **ex1 – ex5** | Tipos básicos, `as HTMLInputElement`, eventos, strings y arrays |
| **ex6 – ex11** | Manipulación del DOM tipada: estilos, `classList`, `querySelectorAll<T>` |
| **ex12 – ex15** | `type` para objetos, uniones (`A \| B`), tuplas, librerías externas (Leaflet) |
| **ex16 – ex18** | `Record<K, V>`, `Map`, `interface`, propiedades opcionales (`?`) |
| **ex20 – ex21** | `enum`, `interface` con `extends`, narrowing con `in` |
| **ex22** | Repaso de tipos básicos |

### ▶️ Cómo ejecutarlos

```bash
cd typescript
npm install        # instala TypeScript y ts-node
npx tsc            # compila todos los .ts a .js
```

Después basta con abrir el `.html` del ejercicio en el navegador (o con Live Server).

> El `tsconfig.json` tiene `strict: true`, así que el compilador es exigente con los `null`, los `undefined` y los tipos implícitos.

---

## ⚛️ React

*Próximamente.* Cuando empecemos con React, los proyectos irán en su propia carpeta.

---

<p align="center">Hecho con ☕ por <b>Iván Hernández García</b> · DAW · IES Sabadell</p>
