"""
Time Module in Python:
The time module in Python is a built-in library used to handle 
time-related tasks. It works primarily with system-level clocks, 
making it the perfect tool for measuring code performance 
(benchmarking), adding delays/pauses to scripts, and working 
with Unix timestamps.
"""

import time

# time.time(): current time in second since epoch time Jan, 1 1970
print(time.time()); # 1780182169.633168

# time.ctime(): Current time as formatted string
print(time.ctime()) # Sun May 31 03:02:49 2026

# time.gmtime(): current time as struct_time in UTC
print(time.gmtime()) # time.struct_time(tm_year=2026, tm_mon=5, tm_mday=30, tm_hour=23, tm_min=3, tm_sec=37, tm_wday=5, tm_yday=150, tm_isdst=0)

# time.localtime(): Current time as struct_time in local time
print(time.localtime()) # time.struct_time(tm_year=2026, tm_mon=5, tm_mday=31, tm_hour=3, tm_min=4, tm_sec=31, tm_wday=6, tm_yday=151, tm_isdst=0)


# time module can be used to analyze performance
start = time.perf_counter()

for _ in range(50000):
    _ = 2 * 2

end = time.perf_counter() 
print(f"execution time {end - start:.6f} seconds") # execution time 0.001115 seconds
