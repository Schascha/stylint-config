'use strict';

module.exports = {
	extends: 'stylelint-config-sass-guidelines',
	rules: {
		'indentation': 'tab',
		'max-empty-lines': 1,
		'order/properties-alphabetical-order': null,
		'order/properties-order': [
			'animation',
			'animation-name',
			'animation-duration',
			'animation-delay',
			'animation-direction',
			'animation-fill-mode',
			'animation-iteration-count',
			'animation-play-state',
			'animation-timing-function',
			'transition',
			'transition-delay',
			'transition-duration',
			'transition-property',
			'transition-timing-function',

			'appearance',
			'content',
			'speak',
			'counter-reset',
			'counter-increment',
			'cursor',
			'pointer-events',
			'user-select',
			'touch-action',
			'touch-callout',
			'tap-highlight-color',

			'box-sizing',
			'zoom',
			'display',
			'table-layout',
			'flex',
			'flex-basis',
			'flex-direction',
			'flex-grow',
			'flex-shrink',
			'flex-wrap',
			'grid',
			'inline-grid',
			'grid-template-columns',
			'grid-template-rows',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-gap',
			'grid-row-gap',
			'grid-column-gap',
			'align-self',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'justify-items',
			'justify-self',
			'order',
			'overflow',
			'overflow-x',
			'overflow-y',
			'overflow-scrolling',
			'visibility',
			'opacity',
			'float',
			'clear',
			'backface-visibility',
			'transform',
			'transform-origin',
			'transform-style',
			'perspective',
			'perspective-origin',
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'width',
			'min-width',
			'max-width',
			'height',
			'min-height',
			'max-height',

			'background',
			'background-color',
			'background-image',
			'background-repeat',
			'background-position',
			'background-attachment',
			'background-size',
			'border',
			'border-top',
			'border-right',
			'border-bottom',
			'border-left',
			'border-width',
			'border-style',
			'border-color',
			'border-image',
			'border-radius',
			'outline',
			'outline-width',
			'outline-style',
			'outline-color',
			'outline-offset',
			'box-shadow',

			'color',
			'font',
			'font-family',
			'font-size',
			'font-weight',
			'font-style',
			'font-variant',
			'line-height',
			'list-style',
			'list-style-type',
			'list-style-position',
			'list-style-image',
			'text-align',
			'text-transform',
			'text-decoration',
			'text-indent',
			'text-shadow',
			'vertical-align',
			'white-space',
			'word-break',
			'word-spacing',
			'word-wrap'
		],
		'selector-max-empty-lines': 0,
		'selector-no-qualifying-type': [
			true,
			{
				'ignore': [
					'attribute',
					'class'
				]
			}
		],
		'value-list-max-empty-lines': 0
	}
}
