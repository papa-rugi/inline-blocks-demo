import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/hero.css';

export function Hero({ data }) {
  return (
    <div
      className="hero"
      style={{
        color: `${data.text_color || '#000'}`,
        backgroundColor: `${data.background_color || 'aliceblue'}`,
        textAlign: `${data.align}`,
        justifyContent: `${data.align === 'left' ? 'start' : data.align}`,
      }}
    >
      <div className="wrapper wrapper--narrow">
        <h1>
          <InlineTextarea name="headline" focusRing={false} />
        </h1>
        <p>
          <InlineTextarea name="subtext" focusRing={false} />
        </p>
      </div>
    </div>
  );
}

export const heroBlock = {
  Component: ({ index, data }) => (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <Hero data={data} />
    </BlocksControls>
  ),
  template: {
    label: 'Hero',
    defaultItem: {
      headline: 'Suspended in a Sunbeam',
      subtext: 'Dispassionate extraterrestrial observer',
      background_color: '#051e26',
      text_color: '#fffaf4',
      align: 'center',
    },
    fields: [
      {
        name: 'text_color',
        label: 'Text Color',
        component: 'select',
        options: ['white', 'black'],
      },
      {
        name: 'align',
        label: 'Alignment',
        component: 'select',
        options: ['center', 'left'],
      },
      {
        name: 'background_color',
        label: 'Background Color',
        component: 'color',
        widget: 'block',
        colors: ['#051e26', '#f2dfc6', '#cfdcc8', '#ebbbbb', '#8a1414'],
      },
    ],
  },
};
