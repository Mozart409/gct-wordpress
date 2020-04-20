// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary
        'indigo-050': '#E0E8F9',
        'indigo-100': '#BED0F7',
        'indigo-200': '#98AEEB',
        'indigo-300': '#7B93DB',
        'indigo-400': '#647ACB',
        'indigo-500': '#4C63B6',
        'indigo-600': '#4055A8',
        'indigo-700': '#35469C',
        'indigo-800': '#2D3A8C',
        'indigo-900': '#19216C',

        // Neutrals
        'cool-grey-050': '#F5F7FA',
        'cool-grey-100': '#E4E7EB',
        'cool-grey-200': '#CBD2D9',
        'cool-grey-300': '#9AA5B1',
        'cool-grey-400': '#7B8794',
        'cool-grey-500': '#616E7C',
        'cool-grey-600': '#52606D',
        'cool-grey-700': '#3E4C59',
        'cool-grey-800': '#323F4B',
        'cool-grey-900': '#1F2933',

        // Supporting
        'light-blue-vivid-050': '#E3F8FF',
        'light-blue-vivid-100': '#B3ECFF',
        'light-blue-vivid-200': '#81DEFD',
        'light-blue-vivid-300': '#5ED0FA',
        'light-blue-vivid-400': '#40C3F7',
        'light-blue-vivid-500': '#2BB0ED',
        'light-blue-vivid-600': '#1992D4',
        'light-blue-vivid-700': '#127FBF',
        'light-blue-vivid-800': '#0B69A3',
        'light-blue-vivid-900': '#035388',

        'red-vivid-050': '#FFE3E3',
        'red-vivid-100': '#FFBDBD',
        'red-vivid-200': '#FF9B9B',
        'red-vivid-300': '#F86A6A',
        'red-vivid-400': '#EF4E4E',
        'red-vivid-500': '#E12D39',
        'red-vivid-600': '#CF1124',
        'red-vivid-700': '#AB091E',
        'red-vivid-800': '#8A041A',
        'red-vivid-900': '#610316',

        'yellow-vivid-050': '#FFFBEA',
        'yellow-vivid-100': '#FFF3C4',
        'yellow-vivid-200': '#FCE588',
        'yellow-vivid-300': '#FADB5F',
        'yellow-vivid-400': '#F7C948',
        'yellow-vivid-500': '#F0B429',
        'yellow-vivid-600': '#DE911D',
        'yellow-vivid-700': '#CB6E17',
        'yellow-vivid-800': '#B44D12',
        'yellow-vivid-900': '#8D2B0B',

        'teal-050': '#EFFCF6',
        'teal-100': '#C6F7E2',
        'teal-200': '#8EEDC7',
        'teal-300': '#65D6AD',
        'teal-400': '#3EBD93',
        'teal-500': '#27AB83',
        'teal-600': '#199473',
        'teal-700': '#147D64',
        'teal-800': '#0C6B58',
        'teal-900': '#014D40'
      }
    },
    fontFamily: {
      Inter: ['Inter'],
      body: ['"Open Sans"']
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
