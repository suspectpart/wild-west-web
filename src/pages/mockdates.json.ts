export async function GET() {
  return new Response(
    JSON.stringify({
      dates: [
        {
          id: 1,
          date: '12.10.',
          title: 'Termin 1',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
          id: 2,
          date: '13.10.',
          title: 'Termin 2',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        },
      ],
    }),
  );
}
