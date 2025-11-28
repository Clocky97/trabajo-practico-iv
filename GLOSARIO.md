# Glosario - Trabajo Practico IV

| Concepto | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Tipado Estático** | Sistema de verificación de tipos previo a la ejecución. Permite que el compilador identifique errores en tiempo de desarrollo. | `let edad: number = 20;` |
| **Union Type** | Permite asignar múltiples tipos posibles a una variable mediante el operador `\|` (ej: string o number). | `let id: number \| string;` |
| **Interface** | Especifica la estructura que debe cumplir un objeto, definiéndole propiedades y sus tipos correspondientes. | `interface Usuario { nombre: string; }` |
| **Tipado de Funciones** | Anotación de tipos en funciones que especifica qué parámetros recibe y qué valor retorna. | `function suma(a: number): number` |
| **Tipos Literales** | Restringe una variable a ciertos valores específicos en lugar de permitir cualquier valor del tipo. | `type Direccion = "arriba" \| "abajo";` |
| **Enum** | Agrupa valores constantes relacionados bajo un identificador único. Mejora la legibilidad del código frente a números o strings sueltos. | `enum Estado { Pendiente, Listo }` |
| **Type Assertion** | Indicación explícita al compilador del tipo que debe considerar para una variable, delegando la responsabilidad al programador. | `(valor as string).length` |