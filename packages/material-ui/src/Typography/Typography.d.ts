import * as React from 'react';
import { PropTypes } from '..';
import { OverrideProps, OverridableComponent } from '../OverridableComponent';
import { Variant as ThemeVariant } from '../styles/createTypography';

export type TypographyVariant = ThemeVariant | 'srOnly';

export type TypographyDisplay = 'initial' | 'block' | 'inline';

export type TypographyColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export interface TypographyTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    align?: PropTypes.Alignment;
    color?: TypographyColor;
    display?: TypographyDisplay;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: TypographyVariant | 'inherit';
    variantMapping?: Partial<Record<TypographyVariant, string>>;
  };
  defaultComponent: D;
  classKey: TypographyClassKey;
}

declare const Typography: OverridableComponent<TypographyTypeMap>;

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TypographyTypeMap<P, D>, D>;

export type TypographyClassKey =
  | 'root'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'srOnly'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'alignJustify'
  | 'noWrap'
  | 'gutterBottom'
  | 'paragraph'
  | 'colorInherit'
  | 'colorSecondary'
  | 'colorTextSecondary'
  | 'colorError'
  | 'displayInline'
  | 'displayBlock';

export default Typography;
