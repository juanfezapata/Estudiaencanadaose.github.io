from django.test import Client, TestCase


class HealthEndpointTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_health_endpoint_returns_ok(self):
        response = self.client.get("/health/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"status": "ok"})
