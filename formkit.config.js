import { generateClasses } from '@formkit/themes';

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        message: 'text-red-500 mb-2 font-bold',
        wrapper: 'space-y-2 mb-3',
        input: 'w-full p-3 border border-gray-300 rounded bg-white bg-opacity-50 text-black',
      },
      text: {},
      file: {
        noFiles: 'block my-2',
        fileItem: 'hidden',
      },
      number: {},
      select: {},
    }),
  },
};

export default config;
