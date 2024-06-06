import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email adresi giriniz")
    .required("Email zorunludur!!!"),
  age: yup
    .number()
    .required("Yas zorunludur")
    .positive("Yas pozitif bir sayi olmalidir")
    .integer("Yas tam sayi olmalidir"),
  password: yup
    .string()
    .required("Sifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
    .matches(/[0-9]/, "Şifre en az bir sayı içermelidir"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "sifreler eslesmiyor")
    .required("sifre dogrulama zorunludur"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanici adi minimum 3 karakter olmalidir")
    .required("Kullanici adi zorunludur!!!"),
  univercity: yup
    .string()
    .oneOf(
      ["bogazici", "gsu", "dicle", "itu", "diger"],
      "Lutfen Universitenizi seciniz"
    )
    .required("Universite secimi zorunludur!!"),
  isAccepted: yup.boolean().oneOf([true], "Kullanim kosullarini kabul ediniz."),
});
