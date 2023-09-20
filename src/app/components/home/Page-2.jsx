import Sheet from "@mui/joy/Sheet";
import * as React from "react";
import { useRef } from "react";
import Box from "@mui/joy/Box";
import NextImage from "next/image";
import { dm_sans } from "@/app/utils/fonts";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div>
      <Sheet
        sx={{
          minHeight: "100vh",
          bgcolor: "#060039",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "90%",
              sm: "70%",
            },
          }}
          direction="column"
          spacing={6}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={ref}
            style={{
              scaleX: scaleX,
              scaleY: scaleY,
              bgColor: "#ff0000",
              paddingBottom: "50px",
              "@media (min-width:600px)": {
                paddingBottom: "100px",
                paddingTop: "100px",
              },
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "#ffffff",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  mt: {
                    xs: 6,
                    md: 6,
                  },
                  mb: {
                    xs: 2,
                    md: 3,
                  },
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Kemiskinan : Sebuah Tantangan Global
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 3,
              }}
            >
              <NextImage
                src="/stunting-image.jpg"
                alt="Indonesian Child Image"
                width={0}
                height={0}
                layout="responsive"
                style={{ objectFit: "cover", maxWidth: "500px" }}
                quality={100}
                blurDataURL="/stunting-image.jpg"
              />

              <Typography
                component="h1"
                sx={{
                  minWidth: "360px",
                  fontWeight: "normal",
                  color: "#ffffff",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                  "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                  },
                }}
                className={dm_sans.className}
              >
                Kemiskinan, sebagai suatu masalah global, tetap menjadi isu yang
                meresap dan melampaui batas-batas negara serta memengaruhi
                banyak kehidupan. Ini mencakup kekurangan kebutuhan dasar,
                termasuk makanan, air bersih, pendidikan, dan layanan kesehatan,
                yang meninggalkan individu dan keluarga berjuang dengan rasa
                rentan yang mendalam. Siklus kemiskinan sering kali menjebak
                generasi-generasi, menghambat mobilitas sosial, dan
                memperpanjang ketidaksetaraan. Namun, dalam realitas kelam ini,
                cerita-cerita tentang ketahanan, tekad, dan harapan muncul saat
                individu dan komunitas berusaha mengatasi kesulitan, menekankan
                perlunya usaha kolektif dan solusi untuk mengurangi cengkeraman
                kemiskinan yang berkepanjangan di masyarakat.
              </Typography>
            </Box>
          </motion.div>
        </Stack>
      </Sheet>
    </div>
  );
}
