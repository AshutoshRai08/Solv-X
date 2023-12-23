def calculate_rectangle_area(length, width):
    area = length * width
    return area

length, width = map(int, input().split())
area = calculate_rectangle_area(length, width)
print(area)
