```tsx
import React, { useRef, useState } from 'react';
import { NavBreadcrumb, NavBreadcrumbs, NavContent, NavItem, NavLabel, NavList, NavPopover } from '@navify/react';

function Example() {
  const popover = useRef<HTMLNavPopoverElement>(null);
  const [collapsedBreadcrumbs, setCollapsedBreadcrumbs] = useState<HTMLNavBreadcrumbElement[]>([]);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: Event) => {
    setCollapsedBreadcrumbs((e as CustomEvent).detail.collapsedBreadcrumbs);
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <NavBreadcrumbs maxItems={4} onNavCollapsedClick={openPopover}>
        <NavBreadcrumb href="#home">Home</NavBreadcrumb>
        <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
        <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
        <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
        <NavBreadcrumb href="#film">Film</NavBreadcrumb>
        <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
      </NavBreadcrumbs>
      <NavPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <NavContent>
          <NavList>
            {collapsedBreadcrumbs.map((breadcrumb, i) => (
              <NavItem
                href={breadcrumb.href}
                lines={i === collapsedBreadcrumbs.length - 1 ? "none" : undefined}
              >
                <NavLabel>{breadcrumb.textContent}</NavLabel>
              </NavItem>
            ))}
          </NavList>
        </NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
