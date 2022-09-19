import { Box, Center, Grid } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useFormik } from "formik";
import { QRCode } from "react-qrcode-logo";

import FormInput from "components/ui/FormInput";
import FormSelect from "components/ui/FormSelect";
import SaveQRButton from "./SaveQRButton";

import { QRFormType, QRStyleOptions } from "./types";

const QRForm = () => {
  const qrCodeSize = useBreakpointValue({
    base: 200,
    sm: 220,
    md: 200,
  });

  const { values, handleChange } = useFormik<QRFormType>({
    initialValues: {
      value: "Your Text or URL",
      fgColor: "#000000",
    },
    onSubmit: () => {},
  });
  const { value, qrStyle, fgColor } = values;

  return (
    <Grid gap={8} templateColumns={["1", "1", "1fr 2fr"]}>
      <Box>
        <Center>
          <Grid gap={2}>
            <Box id="qr-code">
              <QRCode size={qrCodeSize} {...values} />
            </Box>

            <SaveQRButton />
          </Grid>
        </Center>
      </Box>

      <Box>
        <Grid gap={4}>
          <FormInput
            label="Your Text"
            name="value"
            value={value}
            onChange={handleChange}
            placeholder="Text"
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default QRForm;
