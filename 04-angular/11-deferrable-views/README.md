# Deferrable Views (`@defer`)

Deferrable views allowing you to declaratively defer the loading of large dependencies (components, pipes, directives) until they are needed. This improves the initial load time of your application.

## 1. Basic Syntax

The `@defer` block wraps content that you want to lazy load.

```html
@defer {
  <large-component />
}
```

By default, this will load the chunk when the browser is idle.

## 2. Placeholders, Loading, and Errors

You can manage the state of the deferred view.

```html
@defer {
  <chart-component />
} @placeholder (minimum 500ms) {
  <!-- Shown until the chunk starts loading -->
  <p>Placeholder area...</p>
} @loading (after 100ms; minimum 1s) {
  <!-- Shown while loading via network -->
  <spinner-component />
} @error {
  <!-- Shown if loading fails -->
  <p>Failed to load chart.</p>
}
```

## 3. Triggers

You can specify *when* to load the content.

- **`on idle`**: (Default) When browser is idle.
- **`on viewport`**: When the placeholder enters the viewport.
- **`on interaction`**: When user interacts (click, keydown) with the placeholder.
- **`on hover`**: When user hovers over the placeholder.
- **`on immediate`**: Load immediately (non-blocking).
- **`on timer(5s)`**: Load after a specific time.
- **`when condition`**: Load when a custom boolean expression becomes true.

### Examples

**Load when user sees the area:**

```html
@defer (on viewport) {
  <heavy-image-gallery />
} @placeholder {
  <div>Scroll down to see gallery</div>
}
```

**Load when user clicks a button:**

```html
<button #loadTrigger>Load Chart</button>

@defer (on interaction(loadTrigger)) {
  <complex-chart />
}
```
