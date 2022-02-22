import React from 'react';
import classNames from 'classnames';
import { mergeProps } from '../../utils/merge-props';

export type {{name}}Props = {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-{{kebabCaseName}}`;
const defaultProps = {}

const {{name}}: React.FC<{{name}}Props> = p => {
  const props = mergeProps(defaultProps, p)
  const { className, style } = props;
  const {{name}}ClassName = classNames(classPrefix, {}, className);
  return <div className={ {{~name}}ClassName} style={style}></div>;
};

export default {{name}};
