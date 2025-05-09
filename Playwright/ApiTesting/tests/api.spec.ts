import { test, expect } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';

let token: string;
let bookingId: number;
test.describe.serial('Restful Booker API End-to-End Tests', () => {
  
test.describe('Restful Booker API End-to-End Tests', () => {

  test.beforeAll('Generate Auth Token', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/auth`, {
      data: {
        username: 'admin',
        password: 'password123',
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    token = body.token;
    
  });

  test('Create a Booking', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/booking`, {
      data: {
        firstname: 'Nani',
        lastname: 'Vk',
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-01-01',
          checkout: '2025-01-10',
        },
        additionalneeds: 'Late checkout',
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    bookingId = body.bookingid;
    expect(bookingId).toBeGreaterThan(0);
  });

  test('Update the Booking', async ({ request }) => {
    const res = await request.put(`${BASE_URL}/booking/${bookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`,
      },
      data: {
        firstname: 'Srinivas',
        lastname: 'Virat',
        totalprice: 220,
        depositpaid: false,
        bookingdates: {
          checkin: '2025-01-02',
          checkout: '2025-01-12',
        },
        additionalneeds: 'Breakfast',
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.lastname).toBe('Srinivas');
    expect(body.depositpaid).toBe(false);
  });

  test('Verify Updated Booking', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/booking/${bookingId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.lastname).toBe('Srinivas');
    expect(body.additionalneeds).toBe('Breakfast');
  });

  test('Delete the Booking', async ({ request }) => {
    const res = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    expect(res.status()).toBe(201);
  });

  test('Verify Booking is Deleted', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/booking/${bookingId}`);
    expect(res.status()).toBe(404); 
  });

});
    
});
