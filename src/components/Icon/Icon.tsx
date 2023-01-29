import { svg } from './svg';
import type { Props } from './type';

export function Icon({ name, ...rest }: Props) {
  const CurrentIcon = svg[name];

  return <CurrentIcon {...rest} />;
}
