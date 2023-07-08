const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
const UserRoute = require("./User/routes/UserRoute.js");
const HakAksesRoute = require("./User/routes/HakAkses/HakAksesRoute.js");
const TutupPeriodeRoute = require("./Accounting/TutupPeriode/routes/TutupPeriodeRoute.js");
const AuthRoute = require("./User/routes/AuthRoute.js");
const SettingRoute = require("./Setting/routes/SettingRoute.js");
const RtRoute = require("./Master/routes/Rt/RtRoute.js");
const PendudukRoute = require("./Master/routes/Penduduk/PendudukRoute.js");
const PosyanduLansiaRoute = require("./Master/routes/PosyanduLansia/PosyanduLansiaRoute.js");
const LokasiPetinggiRoute = require("./Master/routes/LokasiPetinggi/LokasiPetinggiRoute.js");
const LokasiUmkmRoute = require("./Master/routes/LokasiUmkm/LokasiUmkmRoute.js");
const LokasiWisataRoute = require("./Master/routes/LokasiWisata/LokasiWisataRoute.js");
const UmkmRoute = require("./Master/routes/Umkm/UmkmRoute.js");

const app = express();
app.use(cors());
app.use(express.json());
// Use Routes
app.use(TutupPeriodeRoute);
app.use(UserRoute);
app.use(HakAksesRoute);
app.use("/auth", AuthRoute);
app.use(SettingRoute);
app.use(RtRoute);
app.use(PendudukRoute);
app.use(PosyanduLansiaRoute);
app.use(LokasiPetinggiRoute);
app.use(LokasiUmkmRoute);
app.use(LokasiWisataRoute);
app.use(UmkmRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
