// import Switch from "@mui/joy/Switch";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { useEffect, useRef, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Konva from "../Konva/Konva";

const Card = ({ children }) => {
  return <div className="bg-card rounded-md p-5 mb-5">{children}</div>;
};

const CardHeader = ({ title, active, setActive }) => {
  return (
    <div className="card-header flex justify-between items-center ">
      <h1 className="text-3xl">{title}</h1>
      <Switch
        aria-label="switch"
        value={active}
        onChange={() => setActive(!active)}
      />
    </div>
  );
};

const SendMsg = () => {
  const [active, setActive] = useState(false);

  return (
    <Card>
      <CardHeader
        active={active}
        setActive={setActive}
        title="أرسل رساله عند دخول عضو للسيرفر"
      ></CardHeader>
      {active && (
        <div className="card-body">
          <textarea className="bg-input p-2 border border-white rounded-md resize-none outline-none w-full h-40 mt-2" />
          <div className="flex gap-4 justify-between mt-4">
            <div className="flex-1">
              <h2>المتغيرات</h2>
              <div className="flex flex-col mt-2">
                <p>
                  اسم العضو:{" "}
                  <span className="text-blue-500 font-bold">{"{member}"} </span>
                </p>
                <p>
                  اسم السيرفر:{" "}
                  <span className="text-blue-500 font-bold">{"{server}"} </span>
                </p>
                <p>
                  عدد الاعضاء:{" "}
                  <span className="text-blue-500 font-bold">
                    {"{memberCount}"}{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h2>إرسال</h2>
              <div className="flex flex-col mt-2">
                <p>
                  <input type="radio" name="send" /> <span>الكل</span>
                </p>
                <p>
                  <input type="radio" name="send" /> <span>المشرفين</span>
                </p>
                <p>
                  <input type="radio" name="send" /> <span>الاعضاء</span>
                </p>
                {/* And select  */}
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={"Welcome"}
                  size="small"
                  label="Age"
                  className="mt-4"
                  // onChange={handleChange}
                >
                  <MenuItem key={0} value="Welcome">
                    <em>Welcome</em>
                  </MenuItem>
                  <MenuItem key={10} value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem key={20} value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem key={30} value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

const ImgEditor = () => {
  const [active, setActive] = useState(true);
  const [value, setValue] = useState("with");
  const [room, setRoom] = useState("Select");

  useEffect(() => {
    console.log(value);
  });
  return (
    <Card>
      <CardHeader
        title="إرسال صورة عند دخول عضو للسيرفر"
        active={active}
        setActive={setActive}
      />
      {active && (
        <div className="card-body">
          <div className="header flex items-center gap-2">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">إرسال:</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={value}
                name="radio-buttons-group"
                className=""
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel
                  value="with"
                  control={<Radio />}
                  label="بعد رسالة الترحيب"
                  className="!m-0"
                />
                <FormControlLabel
                  value="before"
                  control={<Radio />}
                  label="قبل رسالة الترحيب"
                  className="!m-0"
                />
                <FormControlLabel
                  value="to-room"
                  control={<Radio />}
                  label="إلى روم"
                  className="!m-0"
                />
              </RadioGroup>
              {
                /* And select  */
                value === "to-room" && (
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    size="small"
                    label="Age"
                    className="mr-4"
                    // onChange={handleChange}
                  >
                    <MenuItem key={0} value="Select" disabled selected>
                      <em>Select Room</em>
                    </MenuItem>
                    <MenuItem key={10} value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem key={20} value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem key={30} value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                )
              }
            </FormControl>
          </div>
          <Konva />
          <style>{`
            .MuiFormControl-root {
              display: flex;
              flex-direction: row;
              align-items: center;
              
            }
            .MuiFormGroup-root {
              display: flex;
              flex-direction: row;
            }
            .MuiFormLabel-root  {
              color: #fff;
              font-weight: bold;
              font-size: 1.2rem;
            }
          `}</style>
        </div>
      )}
    </Card>
  );
};

function MainContent() {
  return (
    <div dir="rtl" className="flex-1 bg-gray-main p-8 text-white">
      <div className="mt-8 space-y-4">
        <h1 className="border-b text-2xl pb-4 mb-4">الترحيب والمغادره</h1>
      </div>
      <SendMsg />
      <ImgEditor />
      <style>{``}</style>
    </div>
  );
}

export default MainContent;
