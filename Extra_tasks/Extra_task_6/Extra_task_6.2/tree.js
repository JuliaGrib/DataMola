const tree = [
  {
    value: 'Пункт 1.',

    children: null,
  },

  {
    value: 'Пункт 2.',

    children: [
      {
        value: 'Подпункт 2.1.',

        children: null,
      },

      {
        value: 'Подпункт 2.2.',

        children: [
          {
            value: 'Подпункт 2.2.1.',

            children: null,
          },

          {
            value: 'Подпункт 2.2.2.',

            children: null,
          },
        ],
      },

      {
        value: 'Подпункт 2.3.',

        children: [
          {
            value: 'Подпункт 2.1.',

            children: null,
          },

          {
            value: 'Подпункт 2.2.',

            children: [
              {
                value: 'Подпункт 2.2.1.',

                children: null,
              },

              {
                value: 'Подпункт 2.2.2.',

                children: null,
              },
            ],
          },

          {
            value: 'Подпункт 2.3.',

            children: null,
          },
        ],
      },
    ],
  },

  {
    value: 'Пункт 3.',

    children: null,
  },
];
