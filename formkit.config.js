import { generateClasses } from '@formkit/themes';

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        input: 'text-black',
        message: 'text-red-500 mb-2',
        wrapper: 'space-y-2 mb-3',
      },
      text: {},
      file: {},
      number: {},
      select: {},
    }),
  },
};

export default config;
