--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2026-09-04 10:02:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16446)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    full_name character varying(500) NOT NULL,
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    display_order integer NOT NULL
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16451)
-- Name: Provincias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Provincias_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Provincias_id_seq" OWNER TO postgres;

--
-- TOC entry 4788 (class 0 OID 0)
-- Dependencies: 216
-- Name: Provincias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Provincias_id_seq" OWNED BY public.provinces.id;


--
-- TOC entry 4634 (class 2604 OID 16452)
-- Name: provinces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces ALTER COLUMN id SET DEFAULT nextval('public."Provincias_id_seq"'::regclass);


--
-- TOC entry 4780 (class 0 OID 16446)
-- Dependencies: 215
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (2, 'Catamarca', 'Provincia de Catamarca', -28, -65, 2);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (3, 'Chaco', 'Provincia del Chaco', -27, -59, 3);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (4, 'Chubut', 'Provincia del Chubut', -43, -68, 4);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (5, 'Córdoba', 'Provincia de Córdoba', -31, -64, 5);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (6, 'Corrientes', 'Provincia de Corrientes', -28, -58, 6);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (7, 'Entre Ríos', 'Provincia de Entre Ríos', -32, -60, 7);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (8, 'Formosa', 'Provincia de Formosa', -24, -60, 8);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (9, 'Jujuy', 'Provincia de Jujuy', -24, -65, 9);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (10, 'La Pampa', 'Provincia de La Pampa', -36, -64, 10);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (11, 'La Rioja', 'Provincia de La Rioja', -29, -67, 11);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (12, 'Mendoza', 'Provincia de Mendoza', -33, -69, 12);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (13, 'Misiones', 'Provincia de Misiones', -27, -55, 13);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (14, 'Neuquén', 'Provincia del Neuquén', -39, -70, 14);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (15, 'Río Negro', 'Provincia de Río Negro', -41, -67, 15);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (16, 'Salta', 'Provincia de Salta', -25, -65, 16);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (17, 'San Juan', 'Provincia de San Juan', -31, -68, 17);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (18, 'San Luis', 'Provincia de San Luis', -33, -66, 18);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (19, 'Santa Cruz', 'Provincia de Santa Cruz', -49, -70, 19);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (20, 'Santa Fe', 'Provincia de Santa Fe', -31, -61, 20);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (21, 'Santiago del Estero', 'Provincia de Santiago del Estero', -27, -64, 21);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (22, 'Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54, -67, 22);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (23, 'Tucumán', 'Provincia de Tucumán', -26, -65, 23);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (24, 'Ciudad Autónoma de Buenos Aires', 'Ciudad Autónoma de Buenos Aires', -34, -58, 24);
INSERT INTO public.provinces (id, name, full_name, latitude, longitude, display_order) VALUES (1, 'Buenos Aires Modificada', 'Provincia de Buenos Aires', -37, -59, 1);


--
-- TOC entry 4789 (class 0 OID 0)
-- Dependencies: 216
-- Name: Provincias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Provincias_id_seq"', 42, true);


-- Completed on 2026-09-04 10:02:56

--
-- PostgreSQL database dump complete
--

