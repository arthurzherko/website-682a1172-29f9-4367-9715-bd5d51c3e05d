import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    duration: '1',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-white">Забронировать место</h1>
      <Card className="mx-auto max-w-md bg-zinc-900/50">
        <CardHeader>
          <CardTitle>Форма бронирования</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Ваше имя</label>
              <Input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-zinc-800"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Телефон</label>
              <Input
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-zinc-800"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Дата</label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-zinc-800"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white">Время</label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="bg-zinc-800"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Длительность (часы)
              </label>
              <Input
                type="number"
                min="1"
                max="12"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="bg-zinc-800"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Забронировать
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Booking;
