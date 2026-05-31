"""
Write a program to manipulate pdf files using pyPDF. 
You program should be able to merge multiple pdf files into a single pdf.
You are welcome to add more functionality.

pyPDF is a free and open-source, pure python PDF library capable of splitting,
merging, cropping and transforming the pages of PDF files.
It can also add custom data, viewing options and passwords to PDF.

pyPDF can retrieve text and metadata from PDFs as well.
"""

from pypdf import PdfWriter

merger = PdfWriter()

pdf_list = ["01-frontend-architecture.pdf", "02-react-nextjs.pdf"]

for pdf in pdf_list:
    merger.append(pdf)

merger.write("out-basic.pdf")


