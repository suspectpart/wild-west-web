export async function GET() {
  return new Response(
    JSON.stringify({
      dates: [
        {
          id: 1,
          date: '12.10.',
          title: 'Test 1',
        },
        {
          id: 2,
          date: '13.10.',
          title: 'Test 2',
        },
      ],
    }),
  );
}
