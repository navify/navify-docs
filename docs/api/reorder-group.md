---
title: "nav-reorder-group"
---
import Props from '@site/static/auto-generated/reorder-group/props.md';
import Events from '@site/static/auto-generated/reorder-group/events.md';
import Methods from '@site/static/auto-generated/reorder-group/methods.md';
import Parts from '@site/static/auto-generated/reorder-group/parts.md';
import CustomProps from '@site/static/auto-generated/reorder-group/custom-props.md';
import Slots from '@site/static/auto-generated/reorder-group/slots.md';

<head>
  <title>nav-reorder-group: Wrapper Component for Navify Framework Apps</title>
  <meta name="description" content="nav-reorder-group is a wrapper component for items using the nav-reorder component on Navify apps. Read to learn more about nav-reorder-group usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


The reorder group is a container for items using the [reorder](./reorder) component. When the user drags an item and drops it in a new position, the `navItemReorder` event is dispatched. A handler for this event should be implemented that calls the `complete` method.

The `detail` property of the `navItemReorder` event includes all of the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` an index `to` a new index. For example usage of the reorder group, see the [reorder](./reorder) documentation.


## Interfaces

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Navify events emitted from this component.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLNavReorderGroupElement;
}
```


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
