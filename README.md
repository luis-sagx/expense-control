# 💰 Control de Presupuesto

Una aplicación web moderna y elegante para gestionar tu presupuesto personal y controlar tus gastos de manera inteligente.

![Control de Presupuesto](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-teal)

## 🚀 Demo en Vivo

[Ver Demo](https://expense-control-theta.vercel.app/) - Desplegado en Vercel

## 📝 Descripción

Control de Presupuesto es una aplicación web responsiva que te permite:

- **Gestionar tu presupuesto** con una interfaz intuitiva
- **Registrar gastos** por categorías (comida, casa, salud, ocio, etc.)
- **Visualizar el progreso** con gráficos circulares interactivos
- **Filtrar gastos** por categoría para análisis detallado
- **Editar y eliminar** gastos con gestos swipe en móviles
- **Persistencia de datos** usando localStorage del navegador

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz dark con efectos glassmorphism y gradientes dorados
- 📱 **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- 🎯 **Gestión Intuitiva**: Swipe para editar/eliminar en dispositivos móviles
- 📊 **Visualización Clara**: Progress bar circular que muestra el % de presupuesto usado
- 🏷️ **Categorización**: 7 categorías predefinidas con iconos representativos
- 🔄 **Tiempo Real**: Actualización instantánea de estadísticas
- 💾 **Persistencia Local**: Los datos se guardan automáticamente en tu navegador

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.5.3** - Superset tipado de JavaScript
- **Vite 5.4.1** - Build tool y dev server ultra rápido

### Styling & UI
- **Tailwind CSS 3.4.10** - Framework CSS utility-first
- **React Circular Progressbar** - Componente de progreso circular
- **React Date Picker** - Selector de fechas personalizable
- **Font Awesome** - Iconografía moderna

### Funcionalidad
- **React Swipeable List** - Gestos swipe para móviles
- **Context API** - Gestión de estado global
- **useReducer** - Manejo de estado complejo
- **Custom Hooks** - Lógica reutilizable
- **localStorage** - Persistencia de datos local


## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AmountDisplay.tsx
│   ├── BudgetForm.tsx
│   ├── BudgetTracker.tsx
│   ├── ErrorMessage.tsx
│   ├── ExpenseDetail.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseList.tsx
│   ├── ExpenseModal.tsx
│   └── FilterByCategory.tsx
├── context/            # Context API
│   └── BudgetContext.tsx
├── data/              # Datos estáticos
│   └── categories.ts
├── helpers/           # Funciones utilitarias
│   └── index.ts
├── hooks/             # Custom hooks
│   └── useBudget.ts
├── reducers/          # Reducers para useReducer
│   └── budget-reducer.ts
├── types/             # Definiciones TypeScript
│   └── index.ts
├── utils/             # Utilidades
│   └── localStorage.ts
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Clonar el Repositorio
```bash
git clone https://github.com/luis-sagx/expense-control.git
cd expense-control
```

### Instalar Dependencias
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`


## 🎨 Guía de Uso

### 1. Configurar Presupuesto
- Al abrir la aplicación, define tu presupuesto mensual
- El sistema calculará automáticamente tus gastos disponibles

### 2. Agregar Gastos
- Haz clic en el botón "+" dorado
- Completa el formulario con descripción, monto, categoría y fecha
- Guarda el gasto

### 3. Gestionar Gastos
- **Desktop**: Usa los botones de editar/eliminar
- **Móvil**: Desliza hacia la izquierda para editar, hacia la derecha para eliminar

### 4. Filtrar por Categoría
- Usa el dropdown para ver gastos de categorías específicas
- Visualiza el total por categoría

### 5. Monitorear Progreso
- El gráfico circular muestra tu % de presupuesto usado
- Cambia a rojo cuando superas el 99% del presupuesto


## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Luis Sagx**
- GitHub: [@luis-sagx](https://github.com/luis-sagx)
- Proyecto: [expense-control](https://github.com/luis-sagx/expense-control)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
