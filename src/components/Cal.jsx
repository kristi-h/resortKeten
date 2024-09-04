import { useState } from 'react';
import Calendar from 'react-calendar';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="body">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}