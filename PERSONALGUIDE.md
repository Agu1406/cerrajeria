## Guía de Conventional Commits.

Siempre he sido una persona métodica, evoluciono, con cada error aprendo algo nuevo y con cada oportunidad descubro cada día una mejor versión de mi mismo, durante el ejercicio de mis becas, actividades con compañeros, practicas, etc, me di cuenta de que muchas veces, sobre todo en el intercambio frecuente de becarios inexpertos (como erá yo), los **commits** nunca eran igual, todo lo contrario, eran desordenados, imposibles de rastreart, etc.

Por eso he creado mi propia guía de commits usando las mejores practicas posibles que definen como, cuando y de que tipo deberían ser los commits, sus mensajes, sus alcances, etc, claro que, esta guía evolucionara con el paso del tiempo, pero me gusta tenerla siempre a la mano en todos mis proyectos.

### Estructura Básica
```
tipo(alcance): descripción corta

[descripción larga opcional]

[pie opcional con referencias]
```

### Tipos Principales
- **feat**: Nuevas características o funcionalidades
- **fix**: Corrección de errores
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, indentación, etc.)
- **refactor**: Refactorización de código
- **test**: Añadir o modificar tests
- **chore**: Tareas de mantenimiento
- **perf**: Mejoras de rendimiento
- **ci**: Cambios en integración continua
- **build**: Cambios en sistema de build

### Ejemplos Prácticos

#### 1. Feature Nueva
```
feat(auth): implementar login con Google

- Añadir botón de login con Google
- Configurar OAuth2
- Añadir manejo de tokens
- Crear página de perfil de usuario

Closes #45
```

#### 2. Corrección de Bug
```
fix(formulario): corregir validación de email

El formulario aceptaba emails sin '@'.
Añadida expresión regular para validación correcta.

Fixes #123
```

#### 3. Documentación
```
docs(readme): actualizar instrucciones de instalación

- Añadir requisitos previos
- Actualizar comandos de instalación
- Incluir troubleshooting común
```

### Buenas Prácticas

#### 1. Primera Línea
- Usar verbos en imperativo
- Máximo 50 caracteres
- No terminar con punto

#### 2. Descripción Detallada
- Separar del título con línea en blanco
- Explicar el "qué" y el "por qué"
- Usar viñetas para mejor legibilidad

#### 3. Referencias
- Usar "Closes", "Fixes" o "Resolves" para cerrar issues
- Referenciar otros issues con #número
- Mencionar breaking changes

### Recordatorio Final
- Ser específico y claro
- Pensar en quien leerá el commit
- Mantener consistencia en el estilo
- Separar cambios grandes en commits más pequeños

## Guía de Git/Github y repositorios.

La interfaz grafica de **GitHub** en los entornos de desarrollo que uso frecuentemente **("Intellij", "VSCode", "Eclipse", NetBeans", etc)** es comno y sencilla de utilizar pero va poco a poco oxidando mis conocimientos en **Git** y su terminal de comandos, por eso, con esta guía garantizo siempre practicar como minimo lo basico yo mismo y familiarizarme con los comandos para no quedarme atrás y olvidar lo que aprendí.

**NOTA:** Si eres unos de mis alumnos y estás leyendo esto, es importante, cuando ejecutes algunos comandos como ``git config --list`` la terminal parece que deja de funcionar, nada más lejos de la realidad, estás dentro del **log** de un comando, simplemente presiona la letra **Q** sin más y volveras a ser capaz de escribir comandos.

### Inicializar un repositorio.

Cuando creamos un proyecto nos desplazamos al directorio que hayamos elegido de nuestra preferencia, yo siempre suelo crear los mios en **Mis Documentos > repositorios** y dentro de repositorios creo un nuevo directorio con el nombre de mi preferencia, dentro de ese nuevo directorio se ejecuta:

```bash
# Convertir un "X" directorio en un repositirio (local).
git init
```

### Configuración inicial (solo la primera vez).

Antes de empezar a trabajar, es importante configurar nuestro nombre y email:

```bash
# Definir que nombre de usuario y correo en local firman los cambios.
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

Para verificar la configuración:

```bash
# Mostrar la configuración actual del repositorio local.
git config --list
```

### Conectar el repositorio local con GitHub.

#### Paso 1: Crear el repositorio en GitHub
1. Inicia sesión en tu cuenta de GitHub.
2. En el menú superior aparecen las opciones **Overview**, **Repositories**, **Projects**, etc. Haz clic en **Repositories**.
3. Busca el botón de color verde llamado **New** y haz clic en él para crear un nuevo repositorio.
4. Elige un nombre para el repositorio y agrega una breve descripción. A continuación te explico los campos configurables:
5. **Choose visibility:** Si no te molesta que otros puedan ver, usar y clonar tu código, elige **public**. En caso contrario, elige **private**.
6. **Add README:** Elige **"off"**. Es un archivo muy sencillo de hacer y puedes crearlo posteriormente.
7. **Add GitIgnore:** Elige **"off"**. Es un archivo muy sencillo de hacer y puedes crearlo posteriormente.
8. **Add License:** Esto es algo que debes elegir tú. Si tu proyecto es muy serio, debes elegir muy cuidadosamente tu licencia. Si no, puedes ir con **no license** sin ningún problema.
9. Haz clic en el botón **Create repository** para finalizar.

Si todo sale bien, **github** nos lleva automaticamente a nuestro repositorio recien creado, la url debería ser algo así: **github.com/usuario/nombrerepositorio**, desde este mismio sitio web podemos ver un apartado que dice algo como lo siguiente:

```bash
Quick setup — if you've done this kind of thing befores
or	
https://github.com/usuario/nombredeturepositorio.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.
```

Copiamos esa **URL** porque es necesaria para conectar nuestro repositorio local con el repositorio remoto.

#### Paso 2: Conectar el repositorio local con GitHub
```bash
# Añadir el remoto (normalmente llamado origin)
# Reemplaza 'usuario' y 'repositorio' con tus datos reales
git remote add origin https://github.com/usuario/nombredeturepositorio.git

# Verificar que se añadió correctamente
git remote -v
```

#### Paso 3: Verificar el nombre de la rama principal
```bash
# Ver en qué rama estás (puede ser 'main' o 'master')
git branch

# Si tu rama se llama 'master' y quieres renombrarla a 'main'
git branch -M main
```

Esto ocurre porque por defecto la rama principal es **master** pero en proyectos profesionales a nivel mundial se usa **main** por convenio, yo recomiendo renombrarla.

#### Paso 4: Subir el código por primera vez

Esto ya tienes que irlo haciendo tú cada vez que hagas cambios en tú código, yo lo primero que agrego a todos mis proyectos siempre es este MarkDown con mi guía personal de commits e iniciailización de de git y el README inicial (a veces).

```bash
# Asegúrate de tener al menos un commit
git status

# Si no tienes commits, añade y haz commit primero
git add .
git commit -m "feat: commit inicial del proyecto"

# Subir la rama principal y establecer seguimiento
git push -u origin main
# O si tu rama se llama 'master':
# git push -u origin master
```

#### Paso 5: Verificar la conexión
- Ve a tu repositorio en GitHub y verifica que todos los archivos se subieron correctamente

### Comandos básicos de trabajo diario.

#### Ver el estado del repositorio
```bash
git status
```

#### Añadir archivos al área de staging
```bash
# Añadir un archivo específico
git add nombre-archivo.txt

# Añadir todos los archivos modificados
git add .

# Añadir todos los archivos de un tipo
git add *.php
```

#### Crear un commit
```bash
git commit -m "mensaje del commit"
```

#### Ver el historial de commits
```bash
# Ver historial completo
git log

# Ver historial resumido (una línea por commit)
git log --oneline

# Ver historial con gráfico de ramas
git log --oneline --graph --all
```

#### Ver diferencias
```bash
# Ver cambios en archivos modificados (no añadidos)
git diff

# Ver cambios en archivos ya añadidos al staging
git diff --staged

# Ver diferencias de un commit específico
git diff HEAD~1
```

### Trabajo con ramas.

#### Crear y cambiar de rama
```bash
# Crear una nueva rama
git branch nombre-rama

# Cambiar a una rama
git checkout nombre-rama

# Crear y cambiar a una nueva rama en un solo comando
git checkout -b nombre-rama

# Ver todas las ramas
git branch

# Ver ramas remotas también
git branch -a
```

#### Fusionar ramas
```bash
# Primero cambiar a la rama destino (normalmente main o master)
git checkout main

# Luego fusionar la rama
git merge nombre-rama
```

#### Eliminar ramas
```bash
# Eliminar rama local
git branch -d nombre-rama

# Forzar eliminación (si tiene cambios no fusionados)
git branch -D nombre-rama
```

### Trabajo con repositorios remotos.

#### Ver y gestionar remotos
```bash
# Ver remotos configurados
git remote -v

# Ver información detallada de un remoto
git remote show origin

# Cambiar la URL de un remoto (si te equivocaste)
git remote set-url origin https://github.com/usuario/nuevo-repositorio.git

# Eliminar un remoto
git remote remove origin
```

#### Subir cambios al remoto
```bash
# Subir cambios de la rama actual
git push origin nombre-rama

# Subir y establecer seguimiento de la rama
git push -u origin nombre-rama

# Subir todas las ramas
git push --all origin
```

#### Obtener cambios del remoto
```bash
# Descargar cambios sin fusionar
git fetch origin

# Descargar y fusionar cambios
git pull origin nombre-rama

# O simplemente (si ya está configurado el seguimiento)
git pull
```

#### Clonar un repositorio
```bash
git clone https://github.com/usuario/repositorio.git
```

### Comandos útiles adicionales.

#### Deshacer cambios
```bash
# Descartar cambios en un archivo (antes de git add)
git checkout -- nombre-archivo.txt

# Quitar archivos del área de staging (después de git add)
git reset HEAD nombre-archivo.txt

# Deshacer el último commit (manteniendo los cambios)
git reset --soft HEAD~1

# Deshacer el último commit (eliminando los cambios)
git reset --hard HEAD~1
```

#### Guardar cambios temporalmente (stash)
```bash
# Guardar cambios temporalmente
git stash

# Ver lista de stashes
git stash list

# Aplicar el último stash
git stash apply

# Aplicar y eliminar el stash
git stash pop

# Eliminar un stash específico
git stash drop stash@{0}
```

#### Ver información específica
```bash
# Ver información de un commit
git show commit-hash

# Ver quién modificó cada línea de un archivo
git blame nombre-archivo.txt

# Buscar en el historial
git log --grep="texto a buscar"
```
