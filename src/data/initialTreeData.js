export const initialTreeData = {
  id: "0",
  name: "Categories",
  level: 0,
  isEditing: false,
  children: [
    {
      id: "1",
      name: "Cool Kids",
      isEditing: false,
      level: 1,
    },
    {
      id: "2",
      name: "Awesome Squad",
      isEditing: false,
      level: 1,
      children: [
        {
          id: "3",
          name: "Super Friends",
          isEditing: false,
          level: 2,
          children: [
            {
              id: "4",
              name: "The Amazing Ones",
              isEditing: false,
              level: 3,
            },
          ],
        },
        {
          id: "5",
          name: "Fantastic Crew",
          isEditing: false,
          level: 2,
        },
      ],
    },
  ],
};
