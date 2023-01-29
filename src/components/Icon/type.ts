import type { SVGProps } from 'react';

import type { svg } from './svg';

export type IconNameType = keyof typeof svg;

export interface Props extends SVGProps<SVGSVGElement> {
  name: IconNameType;
}

export type IconProps = Omit<Props, 'name'>;
