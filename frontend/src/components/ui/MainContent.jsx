// import Switch from "@mui/joy/Switch";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
function MainContent() {
  return (
    <div dir="rtl" className="flex-1 bg-gray-main p-8 text-white">
      <div className="mt-8 space-y-4">
        <h1 className="border-b text-2xl pb-4 mb-4">الترحيب والمغادره</h1>
        <div className="bg-[#151925] rounded-md p-5">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl">أرسل رساله عند دخول عضو للسيرفر</h1>
            <Switch aria-label="switch" />
          </div>
          <textarea className="bg-transparent p-2 border border-white rounded-md resize-none outline-none w-full h-40" />
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
                  <MenuItem value="Welcome">
                    <em>Welcome</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{``}</style>
    </div>
  );
}

export default MainContent;
