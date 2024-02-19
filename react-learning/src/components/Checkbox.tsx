import React, { useState } from 'react';
import { COURSERS } from '@constants';

function Checkbox() {
  const [checked, setChecked] = useState<number[]>([]);

  const handleCheck = (id: number) => {
    setChecked((prev): number[] => {
      const isChecked: boolean = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  return (
    <div>
      {COURSERS.map((course) => (
        <div key={course.id}>
          <input
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Checkbox;
