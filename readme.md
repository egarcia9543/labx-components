# labx-components

Web Components library built with [Stencil](https://stenciljs.com/). Includes Angular wrappers and a warm design token system.

## Components

| Component | Tag | Description |
|-----------|-----|-------------|
| Button | `<labx-button>` | Button with primary, secondary and danger variants |
| Input | `<labx-input>` | Input with floating label and icon slots |
| Icon | `<labx-icon>` | Material Symbols icon |

---

## Installation

```bash
npm install labx-components
```

---

## Usage

### Vanilla / HTML

Add the font and scripts to your HTML:

```html
<link rel="stylesheet" href="node_modules/labx-components/dist/labx-components/labx-components.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script type="module" src="node_modules/labx-components/dist/labx-components/labx-components.esm.js"></script>
```

```html
<labx-button label="Guardar"></labx-button>

<labx-button label="Eliminar" variant="danger"></labx-button>

<labx-input label="Correo">
  <labx-icon slot="icon-left" name="email"></labx-icon>
</labx-input>

<labx-icon name="favorite" filled></labx-icon>
```

---

### Angular

**1. Register custom elements in `main.ts`:**

```ts
import { defineCustomElements } from 'labx-components/loader';
defineCustomElements();
```

**2. Add styles in `angular.json`:**

```json
"styles": [
  "node_modules/labx-components/dist/labx-components/labx-components.css"
]
```

**3. Add the Material Symbols font in `index.html`:**

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

**4. Import and use the Angular wrappers:**

```ts
import { LabxButton, LabxInput, LabxIcon } from 'labx-components/angular';

@Component({
  standalone: true,
  imports: [LabxButton, LabxInput, LabxIcon],
  template: `
    <labx-button label="Guardar" (labxClick)="save()"></labx-button>

    <labx-input label="Correo" [value]="email" (labxChange)="email = $event.detail">
      <labx-icon slot="icon-left" name="email"></labx-icon>
    </labx-input>
  `
})
export class AppComponent {
  email = '';
  save() {}
}
```

**5. Reactive Forms:**

```ts
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { LabxInput } from 'labx-components/angular';

@Component({
  imports: [ReactiveFormsModule, LabxInput],
  template: `
    <labx-input label="Correo" [formControl]="emailControl"></labx-input>
  `
})
export class AppComponent {
  emailControl = new FormControl('');
}
```

---

## Components API

### `<labx-button>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Button'` | Button text |
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Visual style |
| `disabled` | `boolean` | `false` | Disables the button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

| Event | Detail | Description |
|-------|--------|-------------|
| `labxClick` | `void` | Emitted on click |

---

### `<labx-input>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Floating label text |
| `value` | `string` | `''` | Input value |
| `type` | `string` | `'text'` | HTML input type |
| `disabled` | `boolean` | `false` | Disables the input |
| `error` | `string` | — | Error message shown below |

| Slot | Description |
|------|-------------|
| `icon-left` | Icon on the left side |
| `icon-right` | Icon on the right side |

| Event | Detail | Description |
|-------|--------|-------------|
| `labxChange` | `string` | Emitted on value change |

---

### `<labx-icon>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Material Symbols icon name |
| `size` | `number` | `20` | Size in px |
| `filled` | `boolean` | `false` | Filled vs outlined style |

---

## Design Tokens

CSS custom properties available globally after importing the stylesheet:

```css
--color-bg-surface
--color-bg-light
--color-bg-subtle
--color-primary
--color-primary-hover
--color-primary-light
--color-text-default
--color-text-muted
--color-border
--color-success
--color-success-light
--color-danger
--color-danger-light
--color-disabled
```

### Utility Classes

| Class | Property |
|-------|----------|
| `labx-bg-surface` | `background-color: var(--color-bg-surface)` |
| `labx-bg-light` | `background-color: var(--color-bg-light)` |
| `labx-bg-subtle` | `background-color: var(--color-bg-subtle)` |
| `labx-bg-primary` | `background-color: var(--color-primary)` |
| `labx-bg-success` | `background-color: var(--color-success-light)` |
| `labx-bg-danger` | `background-color: var(--color-danger-light)` |
| `labx-text-default` | `color: var(--color-text-default)` |
| `labx-text-muted` | `color: var(--color-text-muted)` |
| `labx-text-primary` | `color: var(--color-primary)` |
| `labx-text-success` | `color: var(--color-success)` |
| `labx-text-danger` | `color: var(--color-danger)` |
| `labx-text-disabled` | `color: var(--color-disabled)` |
| `labx-border` | `border: 1px solid var(--color-border)` |
| `labx-border-primary` | `border: 1px solid var(--color-primary)` |
| `labx-border-success` | `border: 1px solid var(--color-success)` |
| `labx-border-danger` | `border: 1px solid var(--color-danger)` |

---

## License

MIT
